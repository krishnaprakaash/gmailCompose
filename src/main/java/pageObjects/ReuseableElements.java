package pageObjects;

import org.openqa.selenium.By;

public class ReuseableElements {

	public By text(String text) {
		return By.xpath(String.format("//*[text()='%s']", text));
	}

	public By containsText(String text) {
		return By.xpath(String.format("//*[contains(text(),'%s')]", text));
	}

	public By OKButton = text("OK");
	public By CancelButton = text("Cancel");
	public By InsertButton = text("Insert");

}
