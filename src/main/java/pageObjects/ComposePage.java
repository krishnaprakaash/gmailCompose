package pageObjects;

import org.openqa.selenium.By;

public class ComposePage {

	ReuseableElements commEle = new ReuseableElements();

	public By menuButton = By.xpath("//div[@aria-label='Main menu']");

	public By profileIcon = By.xpath("//a[contains(@aria-label,'@gmail.com')]");

	public By SignOutButton = commEle.text("Sign out");

	public By ComposeButton = commEle.text("Compose");

	public By NewMessage = commEle.text("New Message");
	public By MinimizeIcon = By.xpath("//*[@alt='Minimize'][1]");
	public By MaximiseIcon = By.xpath("//*[@alt='Pop-out'][1]");
	public By CloseIcon = By.xpath("//*[@alt='Close'][1]");

	public By ToMail = By.xpath("//*[@name='to']");
	public By SubjectBox = By.xpath("//*[@name='subjectbox']");
	public By AddCc = By.xpath("//*[contains(@data-tooltip,'Add Cc')]");
	public By AddBcc = By.xpath("//*[contains(@data-tooltip,'Add Bcc')]");
	public By CcMail = By.xpath("//*[@name='cc']");
	public By BccMail = By.xpath("//*[@name='bcc']");

	public By MailBody = By.xpath("//div[@aria-label='Message Body']");

	public By SendButton = commEle.text("Send");
	public By SendOptions = By.xpath("//div[@id=':82' or @data-tooltip='More send options']");
	public By FormattingOptions = By.xpath("//div[@class='dv' or @data-tooltip='Formatting options']");
	public By InsertAttachment = By.xpath("//div[@id=':9y' or @data-tooltip='Attach files']");
	public By InsertLink = By.xpath("//div[@id=':a0' or contains(@data-tooltip,'Insert link')]");
	public By InsertEmoji = By.xpath("//div[@id=':a2' or contains(@data-tooltip,'Insert emoji')]");
	public By InsertFromDrive = By.xpath("//div[@id=':a4' or contains(@data-tooltip,'Insert files using')]");
	public By InsertPicture = By.xpath("//div[@id=':a6' or contains(@data-tooltip,'Insert photo')][1]");
	public By ModifyConfidentiality = By.xpath("//div[@id=':a8' or @data-tooltip='Turn confidential mode on / off']");

	public By MoreOptions = By.xpath("(//div[@class='J-J5-Ji J-JN-M-I-JG'])[5]");
	public By DiscardDraft = By.xpath("//div[@class='og T-I-J3']");

//	Formatting
	public By FormattingToolBar = By.xpath("//*[@id=':av']");

//	Insert Link 
	public By TextToDisplay = By.xpath("//*[@id='linkdialog-text']");
	public By WebLink = By.xpath("//*[@id='linkdialog-onweb-tab-input']");
	public By EmailAddress = commEle.text("Email address");
	public By EmailLink = By.xpath("//*[@id='linkdialog-email-tab-input']");
	public By OkButton = commEle.text("OK");

//	Insert Emoji
	public By emojipopUp = By.xpath("//*[@id=':ac.tb']");

//	InsertFilesFromDrive
	public By InsertFilesFromDrive = By.xpath("//div[text()='Insert files using Google Drive']");
	public By DriveLinkButton = commEle.text("Drive link");
	public By InsertAsAtachmentButton = commEle.text("Attachment");
	// insert cancel

//	InsertPhoto
	public By InsertPhoto = By.xpath("//div[text()='Insert Photo' and @id='picker:ht']");
	public By InlineButton = commEle.text("Inline");
	// insert cancel

//	Confidentiality
	public By ConfidentialPopup = commEle.text("Confidential mode");

//	Sent
	public By SentSuccessfully = commEle.text("Message sent.");

//	Vertical Tabs
	public By InboxTab = By.xpath("//a[text()='Inbox']");
	public By DraftsTab = By.xpath("//a[text()='Drafts']");
	public By SentTab = By.xpath("//a[text()='Sent']");

	public By SentItems = By.xpath("(//table[@class='F cf zt'])[6]//td[@class='yX xY ']");
	public By DraftsItems = By.xpath("(//table[@class='F cf zt'])[4]//td[@class='yX xY ']");
	public By InboxItems = By.xpath("(//table[@class='F cf zt'])[2]//td[@class='yX xY ']");

}
