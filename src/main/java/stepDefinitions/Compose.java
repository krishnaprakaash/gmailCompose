package stepDefinitions;

import cucumber.api.java.en.When;
import pageObjects.ComposePage;
import pageObjects.ReuseableElements;
import supportClasses.ReporterFunction2;
import supportClasses.reuseableFunctions;

public class Compose {

	ReporterFunction2 report = new ReporterFunction2();
	reuseableFunctions commFunc = new reuseableFunctions();
	ComposePage gmailEle = new ComposePage();
	ReuseableElements commEle = new ReuseableElements();

	@When("^User sends mail with the given data$")
	public void ComposeMail() throws Throwable {
		try {
			String subject = CommonStepDefs.data.get().get("Subject");
			String mailBody = CommonStepDefs.data.get().get("Body");

			commFunc.click(gmailEle.ComposeButton);

			commFunc.clearAndSendKeys(gmailEle.ToMail, CommonStepDefs.data.get().get("To"));

			if (!CommonStepDefs.data.get().get("Bcc").contentEquals("")) {
				commFunc.click(gmailEle.AddBcc);
				commFunc.clearAndSendKeys(gmailEle.BccMail, CommonStepDefs.data.get().get("Bcc"));
			}
			if (!CommonStepDefs.data.get().get("Cc").contentEquals("")) {
				commFunc.click(gmailEle.AddCc);
				commFunc.clearAndSendKeys(gmailEle.CcMail, CommonStepDefs.data.get().get("Cc"));
			}
			if (!subject.contains("Random"))
				commFunc.clearAndSendKeys(gmailEle.SubjectBox, subject);
			else {
				commFunc.clearAndSendKeys(gmailEle.SubjectBox,
						subject + "; " + commFunc.randomAlphaNumeric(Integer.parseInt(subject.split(":")[1])));
			}

			if (!mailBody.contains("Random"))
				commFunc.clearAndSendKeys(gmailEle.MailBody, mailBody);
			else {
				commFunc.clearAndSendKeys(gmailEle.MailBody,
						mailBody + "/n" + commFunc.randomAlphaNumeric(Integer.parseInt(mailBody.split(":")[1])));
			}

			report.info("Mail Data entered Successfully", true);

			commFunc.click(gmailEle.SendButton);

			if (commFunc.waitVisible(gmailEle.SentSuccessfully))
				report.pass("Mail Sent successfully", true);
			else
				report.info("Mail Sent", true);

			commFunc.click(gmailEle.SentTab);
			commFunc.waitVisible(gmailEle.SentItems);
			report.info("Sent items", true);

			System.out.println(commFunc.findElements(gmailEle.SentItems).size());

			commFunc.click(gmailEle.InboxTab);
			commFunc.waitVisible(gmailEle.InboxItems);
			report.info("Inbox", true);

			System.out.println(commFunc.findElements(gmailEle.InboxItems).size());

		} catch (Exception e) {
			e.printStackTrace();
			report.error("Exception occured <br>" + e.getLocalizedMessage(), true);
		}
	}

	@When("^User validates the required field$")
	public void FieldValidation() throws Throwable {
		try {
			String fieldToBeChecked = CommonStepDefs.data.get().get("ReferenceData");
			String toMail = CommonStepDefs.data.get().get("To");
			String ccMail = CommonStepDefs.data.get().get("Cc");
			String bccMail = CommonStepDefs.data.get().get("Bcc");
			String mailSubject = CommonStepDefs.data.get().get("Subject");
			String mailBody = CommonStepDefs.data.get().get("Body");

			String error = "";

			commFunc.click(gmailEle.ComposeButton);
			System.out.println(String.format(" ~ ~ ~ ~ %s ~ ~ ~ ~ ", fieldToBeChecked.toLowerCase()));
			switch (fieldToBeChecked.toLowerCase()) {
			case "compose":
				if (!commFunc.waitVisible(gmailEle.ToMail))
					error = "New window not displayed after clicking the compose button";
				break;
			case "alphanumeric":
				commFunc.clearAndSendKeys(gmailEle.ToMail, toMail);
				if (!commFunc.getText(gmailEle.ToMail).contentEquals(toMail))
					error = String.format(
							"Validaion of the field 'To Mail' has failed. <br>Expected - %s, <br>Actual - %s<br>",
							toMail, commFunc.getText(gmailEle.ToMail));

				if (!CommonStepDefs.data.get().get("Cc").contentEquals("")) {
					commFunc.click(gmailEle.AddCc);
					commFunc.clearAndSendKeys(gmailEle.CcMail, ccMail);
					if (!commFunc.getText(gmailEle.CcMail).contentEquals(ccMail))
						error += String.format(
								"Validaion of the field 'To Mail' has failed. <br>Expected - %s, <br>Actual - %s<br>",
								ccMail, commFunc.getText(gmailEle.CcMail));
				}

				if (!CommonStepDefs.data.get().get("Bcc").contentEquals("")) {
					commFunc.click(gmailEle.AddBcc);
					commFunc.clearAndSendKeys(gmailEle.BccMail, bccMail);
					if (!commFunc.getText(gmailEle.BccMail).contentEquals(bccMail))
						error += String.format(
								"Validaion of the field 'To Mail' has failed. <br>Expected - %s, <br>Actual - %s<br>",
								bccMail, commFunc.getText(gmailEle.BccMail));
				}
				break;
//		case "suggestions": ???
//			commFunc.click(gmailEle.ComposeButton);
//			if (commFunc.waitVisible(gmailEle.ToMail))
//				report.pass("Compose button works", true);
//			else
//				report.fail("New window not displayed after clicking the compose button", true);
//			break;
			case "multiplevalues":
				commFunc.clearAndSendKeys(gmailEle.ToMail, toMail + ";" + toMail);

				if (!CommonStepDefs.data.get().get("Bcc").contentEquals("")) {
					commFunc.click(gmailEle.AddBcc);
					commFunc.clearAndSendKeys(gmailEle.BccMail, bccMail + ";" + bccMail);
				}

				if (!CommonStepDefs.data.get().get("Cc").contentEquals("")) {
					commFunc.click(gmailEle.AddCc);
					commFunc.clearAndSendKeys(gmailEle.CcMail, ccMail + ";" + ccMail);
				}
				break;
			case "subjectlimit":
				commFunc.clearAndSendKeys(gmailEle.SubjectBox,
						mailSubject + " | Random 500 | " + commFunc.randomAlphaNumeric(500));
				report.warning("Subject limit is unknown", true);
				break;
			case "mailbody":
				commFunc.clearAndSendKeys(gmailEle.MailBody, mailBody);
				if (!commFunc.getText(gmailEle.MailBody).contentEquals(mailBody))
					error += String.format(
							"Validaion of the field 'To Mail' has failed. <br>Expected - %s, <br>Actual - %s<br>",
							mailBody, commFunc.getText(gmailEle.MailBody));
				break;
//			case "attachment":
//				commFunc.clearAndSendKeys(gmailEle.InsertAttachment, CommonStepDefs.data.get().get("Path"));
//				report.info("Attachment entered", true);
//				break;
			case "link":
				commFunc.click(gmailEle.InsertLink);
				if (commFunc.waitVisible(gmailEle.TextToDisplay)) {
					commFunc.clearAndSendKeys(gmailEle.TextToDisplay, commFunc.randomAlphaNumeric(10));
					commFunc.clearAndSendKeys(gmailEle.WebLink, CommonStepDefs.data.get().get("Path"));
					report.info("Weblink entered", true);
					commFunc.click(gmailEle.EmailLink);
					commFunc.clearAndSendKeys(gmailEle.EmailAddress, CommonStepDefs.data.get().get("To"));
					report.info("Email entered", true);
					commFunc.click(commEle.OKButton);
				} else
					error += "Insert link dialogue box not displayed<br>";
				break;
			case "emoji":
				commFunc.click(gmailEle.InsertEmoji);
				if (!commFunc.waitVisible(gmailEle.emojipopUp))
					error += "Emoji popup is not displayed after clicking the Insert Emoji Icon";

				break;
			case "drivefile":
				commFunc.click(gmailEle.DriveLinkButton);
				if (!commFunc.waitVisible(gmailEle.InsertFilesFromDrive))
					error += "Insert drive files pop up is not displayed <br>";
				break;
			case "photo":
				commFunc.click(gmailEle.InsertPicture);
				if (!commFunc.waitVisible(gmailEle.InlineButton))
					error += "Insert photo pop up is not displayed <br>";
				else
					commFunc.click(commEle.CancelButton);
				break;
			case "confidentiality":
				commFunc.click(gmailEle.ModifyConfidentiality);
				if (!commFunc.waitVisible(gmailEle.ConfidentialPopup))
					error += "Confidentiality popup is not displayed<br>";
				else
					commFunc.click(commEle.CancelButton);
				break;
			default:
				report.warning(String.format("Invalid or not automated field - %s", fieldToBeChecked), true);
			}

			if (error.contentEquals(""))
				report.pass(String.format("Field Validation for %s is successfull", fieldToBeChecked), true);
			else
				report.fail(String.format("Field Validation for %s failed with the following error(s) <br> %s",
						fieldToBeChecked, error), true);

			commFunc.click(gmailEle.CloseIcon);
		} catch (Exception e) {
			e.printStackTrace();
			report.error("Exception occured <br>" + e.getLocalizedMessage(), true);
		}
	}

	@When("^User saves a mail in drafts with the given data$")
	public void DraftMail() throws Throwable {
		try {
			String subject = CommonStepDefs.data.get().get("Subject");
			String mailBody = CommonStepDefs.data.get().get("Body");

			commFunc.click(gmailEle.ComposeButton);

			commFunc.clearAndSendKeys(gmailEle.ToMail, CommonStepDefs.data.get().get("To"));

			if (!CommonStepDefs.data.get().get("Bcc").contentEquals("")) {
				commFunc.click(gmailEle.AddBcc);
				commFunc.clearAndSendKeys(gmailEle.BccMail, CommonStepDefs.data.get().get("Bcc"));
			}
			if (!CommonStepDefs.data.get().get("Cc").contentEquals("")) {
				commFunc.click(gmailEle.AddCc);
				commFunc.clearAndSendKeys(gmailEle.CcMail, CommonStepDefs.data.get().get("Cc"));
			}
			if (!subject.contains("Random"))
				commFunc.clearAndSendKeys(gmailEle.SubjectBox, subject);
			else {
				commFunc.clearAndSendKeys(gmailEle.SubjectBox,
						subject + "; " + commFunc.randomAlphaNumeric(Integer.parseInt(subject.split(":")[1])));
			}

			if (!mailBody.contains("Random"))
				commFunc.clearAndSendKeys(gmailEle.MailBody, mailBody);
			else {
				commFunc.clearAndSendKeys(gmailEle.MailBody,
						mailBody + "/n" + commFunc.randomAlphaNumeric(Integer.parseInt(mailBody.split(":")[1])));
			}

			report.info("Mail Data entered Successfully", true);

			if (!commFunc.waitVisible(commEle.text("Draft saved")))
				report.pass("Draft saved successfully", true);

			commFunc.click(gmailEle.CloseIcon);

			if (!commFunc.waitVisible(gmailEle.ToMail))
				report.pass("Mail closed successfully", true);
			else
				report.info("Mail not closed", true);

			commFunc.click(gmailEle.DraftsTab);
			commFunc.waitVisible(gmailEle.DraftsItems);
			report.info(String.format("Drafts <br> Total items in Drafts - %s",
					commFunc.findElements(gmailEle.DraftsItems).size()), true);

			System.out.println(commFunc.findElements(gmailEle.DraftsItems).size());

			commFunc.click(gmailEle.SentTab);
			commFunc.waitVisible(gmailEle.SentItems);
			report.info(String.format("Sent Items <br> Total items in Sent Items - %s",
					commFunc.findElements(gmailEle.SentItems).size()), true);

			System.out.println(commFunc.findElements(gmailEle.SentItems).size());

		} catch (Exception e) {
			e.printStackTrace();
			report.error("Exception occured <br>" + e.getLocalizedMessage(), true);
		}
	}

}
