package pageObjects;

import org.openqa.selenium.By;

public class LoginPage {

	ReuseableElements commonEle = new ReuseableElements();

	public By mailId = By.xpath("//input[@type='email']");
	public By nextButton = commonEle.text("Next");
	public By mailPassword = By.xpath("//input[@type='password']");

	public By ConfirmButton = commonEle.text("Confirm");

}
