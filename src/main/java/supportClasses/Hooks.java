package supportClasses;

import java.awt.Robot;
import java.awt.event.KeyEvent;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	driver driver = new driver();
	ReporterFunction2 reporter = new ReporterFunction2();

	@After
	public void after() throws Throwable {
		System.out.println("into After");
		try {
			supportClasses.driver.getWebDriver().close();
		} catch (Throwable t) {
			try {
				supportClasses.driver.getWebDriver().switchTo().alert().dismiss();
			} catch (Throwable tt) {
				Robot robot = new Robot();
				robot.keyPress(KeyEvent.VK_ENTER);
				robot.keyRelease(KeyEvent.VK_ENTER);
			}
		}
		supportClasses.driver.getWebDriver().quit();
		reporter.info("Scenario completed", false);
		ReporterFunction2.closeTest();
	}

	@Before
	public void before(Scenario scenario) {
		System.out.println("into Before");
		ReporterFunction2.startTest(scenario.getName());
		reporter.info("Started scenario", false);
	}

}
