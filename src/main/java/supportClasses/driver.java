package supportClasses;

import org.openqa.selenium.WebDriver;

public class driver {

    private static ThreadLocal<WebDriver> driver = new ThreadLocal<WebDriver>();

    public static void setWebDriver(WebDriver driverParam) {

        driver.set(driverParam); 
    }

    public static WebDriver getWebDriver() {
        return driver.get();
    }
}
