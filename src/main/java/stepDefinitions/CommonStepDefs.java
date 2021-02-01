package stepDefinitions;

import java.util.ArrayList;
import java.util.HashMap;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import io.github.bonigarcia.wdm.WebDriverManager;
import pageObjects.ComposePage;
import pageObjects.LoginPage;
import supportClasses.ExcelData;
import supportClasses.ReporterFunction2;
import supportClasses.reuseableFunctions;

public class CommonStepDefs {

	ReporterFunction2 report = new ReporterFunction2();
	reuseableFunctions commFunc = new reuseableFunctions();
	LoginPage loginEle = new LoginPage();
	ComposePage gmailEle = new ComposePage();

	static ThreadLocal<HashMap<String, String>> data = new ThreadLocal<>();
//	static ThreadLocal<HashMap<String, String>> data = new ThreadLocal<>();

	@Given("^User launches the browser and navigates to GMail with \"(.*)\"$")
	public void browserLaunch(String browserName) throws Throwable {
		try {
			WebDriver driver;
			switch (browserName.toLowerCase()) {
			case "chrome":
				WebDriverManager.chromedriver().setup();
				driver = new ChromeDriver();
				break;
			case "firefox":
				WebDriverManager.firefoxdriver().setup();
				driver = new FirefoxDriver();
				break;
			default:
				WebDriverManager.chromedriver().setup();
				driver = new ChromeDriver();
			}
			driver.get("https://gmail.com");
			supportClasses.driver.setWebDriver(driver);
			driver.manage().window().maximize();
		} catch (Exception e) {
			e.printStackTrace();
			report.error("Exception occured <br>" + e.getLocalizedMessage(), true);
		}
	}

	@Given("^User logs in successfully into the mail TC(\\d+)$")
	public void gmailLogin(String dataBinding) throws Throwable {
		try {
			readData("TC" + dataBinding);
			commFunc.waitVisible(loginEle.mailId);
			commFunc.sendKeys(loginEle.mailId, CommonStepDefs.data.get().get("MailID"));
			report.info("Entered Mail ID", true);
			commFunc.click(loginEle.nextButton);
			commFunc.waitVisible(loginEle.mailPassword);
			commFunc.sendKeys(loginEle.mailPassword, CommonStepDefs.data.get().get("Password"));
			report.info("Entered Mail Password", true);
			commFunc.click(loginEle.nextButton);
			for (int i = 0; i < 10; i++) {
				if (commFunc.waitVisible(gmailEle.menuButton))
					break;
				if (commFunc.waitVisible(loginEle.ConfirmButton))
					commFunc.click(loginEle.ConfirmButton);
			}
			Thread.sleep(9000);
		} catch (Exception e) {
			report.error(e.getLocalizedMessage(), true);
		}
	}

	@Given("^User logsout successfully$")
	public void gmailLogout() throws Throwable {
		try {
			commFunc.waitVisible(gmailEle.profileIcon);
			commFunc.click(gmailEle.profileIcon);
			commFunc.waitVisible(gmailEle.SignOutButton);
			report.info("Signing out", true);
			commFunc.click(gmailEle.SignOutButton);
		} catch (Exception e) {
			report.error(e.getLocalizedMessage(), true);
		}
	}

	public void readData(String dataBinding) throws Throwable {
		try {
			CommonStepDefs.data.set(new HashMap<String, String>());
			ExcelData dat = new ExcelData("./TestData/TestData.xlsx");
			dat.open();
			dat.setSheet("Compose");
			int rowCount = dat.getRows();
			ArrayList<String> colValues = dat.getColumns();
			String tcName = "";
			for (int i = 1; i < rowCount; i++) {
				tcName = dat.readData(0, i);
				if (tcName.contentEquals(dataBinding))
					for (int j = 0; j < colValues.size(); j++)
						CommonStepDefs.data.get().put(colValues.get(j), dat.readData(j, i));
			}
			System.out.println("Data read");
		} catch (Throwable t) {
			t.printStackTrace();
			report.error(String.format("Error while reading data from Excel <br> %s", t.getLocalizedMessage()), false);
		}
	}

}
