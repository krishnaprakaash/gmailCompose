package runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.testng.annotations.DataProvider;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import supportClasses.ReporterFunction2;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "pretty", "html:target/cucumber" }, tags = { "@composeFunction" }, features = {
		"src" }, glue = { "classpath:stepDefinitions", "classpath:pageObjects", "classpath:supportClasses" })

public class WebRunner {

	@DataProvider(parallel = false)
	public void scenarios() {
	}

	@BeforeClass
	public static void startReport() {
		ReporterFunction2.createReport();
	}

	@AfterClass
	public static void endReport() {
		ReporterFunction2.closeReport();
	}

}
