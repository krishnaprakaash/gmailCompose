package supportClasses;

public class ReporterFunction {

//	private static ExtentReports reports;
//	static ExtentTest test;
//	String path = "";
//	String tempFile = "";
//
//	public static void createReport() {
//		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd_MM_yyyy HH_mm_ss");
//		LocalDateTime now = LocalDateTime.now();
//		String date = dtf.format(now).split(" ")[0];
//		String time = dtf.format(now).split(" ")[1];
//		File file = new File(String.format(".//Results//%s//%s", date, time));
//		if (!file.mkdir())
//			System.err.println("Folder creation failed");
//		reports = new ExtentReports();
//	}
//
//	public static void closeReport() {
//		reports.endTest(test);
//		reports.flush();
//	}
//
//	public static void startTest(String name) {
//		test = reports.startTest(name);
//		reports.flush();
//	}
//
//	public static void closeTest() {
//		reports.endTest(test);
//	}
//
//	public void pass(String desc, boolean captureScreenshot) {
//		if (captureScreenshot)
//			try {
////				test.log(LogStatus.PASS, test.addScreenCapture(capture(driver.getWebDriver())) + desc);
//				test.log(LogStatus.PASS,
//						test.addBase64ScreenShot(ScreenCaptureAsBase64String(driver.getWebDriver())) + desc);
//				File myObj = new File(".//Results//temp.png");
//				myObj.delete();
//			} catch (Throwable e) {
//			}
//		else
//			test.log(LogStatus.PASS, desc);
//	}
//
//	public void info(String desc, boolean captureScreenshot) {
//		if (captureScreenshot)
//			try {
////				test.log(LogStatus.INFO, test.addScreenCapture(capture(driver.getWebDriver())) + desc);
//				test.log(LogStatus.INFO,
//						test.addBase64ScreenShot(ScreenCaptureAsBase64String(driver.getWebDriver())) + desc);
//				File myObj = new File(".//Results//temp.png");
//				myObj.delete();
//			} catch (Throwable e) {
//			}
//		else
//			test.log(LogStatus.INFO, desc);
//	}
//
//	public void fail(String desc, boolean captureScreenshot) {
//		if (captureScreenshot)
//			try {
////				test.log(LogStatus.FAIL, test.addScreenCapture(capture(driver.getWebDriver())) + desc);
//				test.log(LogStatus.FAIL,
//						test.addBase64ScreenShot(ScreenCaptureAsBase64String(driver.getWebDriver())) + desc);
//				File myObj = new File(".//Results//temp.png");
//				myObj.delete();
//			} catch (Throwable e) {
//			}
//		else
//			test.log(LogStatus.FAIL, desc);
//	}
//
//	public void error(String desc, boolean captureScreenshot) {
//		if (captureScreenshot)
//			try {
////				test.log(LogStatus.ERROR, test.addScreenCapture(capture(driver.getWebDriver())) + desc);
//				test.log(LogStatus.ERROR,
//						test.addBase64ScreenShot(ScreenCaptureAsBase64String(driver.getWebDriver())) + desc);
//				File myObj = new File(".//Results//temp.png");
//				myObj.delete();
//			} catch (Throwable e) {
//			}
//		else
//			test.log(LogStatus.ERROR, desc);
//	}
//
//	public void warning(String desc, boolean captureScreenshot) {
//		if (captureScreenshot)
//			try {
////				test.log(LogStatus.WARNING, test.addScreenCapture(capture(driver.getWebDriver())) + desc);
//				test.log(LogStatus.WARNING,
//						test.addBase64ScreenShot(ScreenCaptureAsBase64String(driver.getWebDriver())) + desc);
//				File myObj = new File(".//Results//temp.png");
//				myObj.delete();
//			} catch (Throwable e) {
//			}
//		else
//			test.log(LogStatus.WARNING, desc);
//	}
//
//	public static String capture(WebDriver driver) throws Throwable {
//		File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
//		File Dest = new File(".//Results//temp.png");
//		String errflpath = Dest.getAbsolutePath();
//		FileUtils.copyFile(scrFile, Dest);
//		return errflpath;
//	}
//
//	public String ScreenCaptureAsBase64String(WebDriver driver) {
//		TakesScreenshot ts = (TakesScreenshot) driver;
//		return ts.getScreenshotAs(OutputType.BASE64);
//	}
}
