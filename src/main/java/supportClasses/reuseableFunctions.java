package supportClasses;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.List;
import java.util.Random;

import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class reuseableFunctions {
	private int slowExe = 500;
	ReporterFunction2 report = new ReporterFunction2();

	public synchronized void sendKeys(By by, String text) {
		waitVisible(by);
		WebElement elem = supportClasses.driver.getWebDriver().findElement(by);
		try {
			elem.sendKeys(text);
			Thread.sleep(slowExe);
		} catch (Exception e) {
			JavascriptExecutor executor = (JavascriptExecutor) supportClasses.driver.getWebDriver();
			executor.executeScript(String.format("arguments[0].value='%s';", text), elem);
		}
		report.info(String.format("Entered text - %s", text), false);
	}

	public synchronized void clearAndSendKeys(By by, String text) {
		waitVisible(by);
		WebElement elem = supportClasses.driver.getWebDriver().findElement(by);
		elem.clear();
		try {
			elem.sendKeys(text);
			Thread.sleep(slowExe);
		} catch (Exception e) {
			JavascriptExecutor executor = (JavascriptExecutor) supportClasses.driver.getWebDriver();
			executor.executeScript(String.format("arguments[0].value='%s';", text), elem);
		}
		report.info(String.format("Entered text - %s", text), false);
	}

	public synchronized void click(By by) {
		waitVisible(by);
		WebElement elem = supportClasses.driver.getWebDriver().findElement(by);
		try {
			elem.click();
			Thread.sleep(slowExe);
		} catch (Exception e) {
			JavascriptExecutor executor = (JavascriptExecutor) supportClasses.driver.getWebDriver();
			executor.executeScript("arguments[0].click();", elem);
		}
		report.info(String.format("Element clicked"), false);
	}

	public synchronized boolean waitVisible(By by) {
		try {
			WebDriver driver = supportClasses.driver.getWebDriver();
			WebDriverWait wait = new WebDriverWait(driver, 16);
			wait.until(ExpectedConditions.visibilityOfElementLocated(by));
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public synchronized boolean elementExists(By by) {
		try {
			waitVisible(by);
			WebDriver driver = supportClasses.driver.getWebDriver();
			return driver.findElements(by).size() > 0;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public List<WebElement> findElements(By by) {
		try {
			WebDriver driver = supportClasses.driver.getWebDriver();
			return driver.findElements(by);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

	public synchronized String getText(By by) {
		WebDriver driver = supportClasses.driver.getWebDriver();
		WebElement elem = driver.findElement(by);
		return elem.getText();
	}

	public synchronized Integer randomNumber(int maxNum) {
		Random r = new Random();
		return r.nextInt(maxNum);
	}

	public synchronized String randomAlphaNumeric(Integer length) {
		String a = RandomStringUtils.randomAlphanumeric(length);
		System.out.println("Random - " + a);
		return a;
	}

	public synchronized void keyStroke(String key) {
		Robot robot;
		try {
			robot = new Robot();
			switch (key.toLowerCase()) {
			case "enter":
				robot.keyPress(KeyEvent.VK_ENTER);
				robot.keyRelease(KeyEvent.VK_ENTER);
				break;
			case "escape":
				robot.keyPress(KeyEvent.VK_ESCAPE);
				robot.keyRelease(KeyEvent.VK_ESCAPE);
				break;
			}
		} catch (AWTException e) {
			e.printStackTrace();
		}
	}
}
