package supportClasses;

import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

public class ReporterFunction2 {

	private static ExtentReports reports;
	static ExtentTest test;
	String path = "";
	static String reportPath = "";

	public static void createReport() {
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd_MM_yyyy HH_mm_ss");
		LocalDateTime now = LocalDateTime.now();
		String date = dtf.format(now).split(" ")[0];
		String time = dtf.format(now).split(" ")[1];
		reportPath = String.format(".//Results//%s//%s", date, time);
		File file = new File(reportPath);
		if (!file.mkdir())
			System.err.println("Folder creation failed");
		reports = new ExtentReports(String.format("%s//ExtentReport.html", reportPath), true);
	}

	public static void closeReport() {
		reports.endTest(test);
		reports.flush();
	}

	public static void startTest(String name) {
		test = reports.startTest(name);
		reports.flush();
	}

	public static void closeTest() {
		reports.endTest(test);
	}

	public void pass(String desc, boolean captureScreenshot) {
		if (captureScreenshot)
			try {
				test.log(LogStatus.PASS, test.addScreenCapture(capture(driver.getWebDriver())) + desc);
			} catch (Throwable e) {
			}
		else
			test.log(LogStatus.PASS, desc);
	}

	public void info(String desc, boolean captureScreenshot) {
		if (captureScreenshot)
			try {
				test.log(LogStatus.INFO, test.addScreenCapture(capture(driver.getWebDriver())) + desc);
			} catch (Throwable e) {
			}
		else
			test.log(LogStatus.INFO, desc);
	}

	public void fail(String desc, boolean captureScreenshot) {
		if (captureScreenshot)
			try {
				test.log(LogStatus.FAIL, test.addScreenCapture(capture(driver.getWebDriver())) + desc);
			} catch (Throwable e) {
			}
		else
			test.log(LogStatus.FAIL, desc);
	}

	public void error(String desc, boolean captureScreenshot) throws Exception {
		if (captureScreenshot)
			try {
				test.log(LogStatus.ERROR, test.addScreenCapture(capture(driver.getWebDriver())) + desc);
			} catch (Throwable e) {
			}

		else
			test.log(LogStatus.ERROR, desc);
		throw new Exception(desc);
	}

	public void warning(String desc, boolean captureScreenshot) {
		if (captureScreenshot)
			try {
				test.log(LogStatus.WARNING, test.addScreenCapture(capture(driver.getWebDriver())) + desc);
			} catch (Throwable e) {
			}
		else
			test.log(LogStatus.WARNING, desc);
	}

	public static String capture(WebDriver driver) throws Throwable {

		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("HH_mm_ss");
		LocalDateTime now = LocalDateTime.now();

		File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

		File Dest = new File(String.format("%s//Screenshots//%s.jpeg", reportPath, dtf.format(now)));

		String errflpath = Dest.getAbsolutePath();
		FileUtils.copyFile(scrFile, Dest);
		return errflpath;
	}

	public String ScreenCaptureAsBase64String(WebDriver driver) {
		TakesScreenshot ts = (TakesScreenshot) driver;
		return ts.getScreenshotAs(OutputType.BASE64);
	}
}
