package stepdefin;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AtitudeTest {

	
	@When("^I meet ([^\"]*)$")
	public void dImeet(String str){
		if(str.equals("watchmen"))
			System.out.println("watchmen automation");
			
		if(str.equals("NewspaperBoy"))
			System.out.println("NewspaperBoyg automation");
		
	}
	@Given("^I work in ([^\"]*)$")
	public void ln(String str){
		if(str.equals("Latenights"))
			System.out.println("Latenights automation");
			
		if(str.equals("morning"))
			System.out.println("morning automation");
	}
	@Then("^I ([^\"]*) him$")
	public void gre(String str){
		if(str.equals("Greeted"))
			System.out.println("greeted automation");
			
		if(str.equals("skipGreeting"))
			System.out.println("skipgreeting automation");
	}
}
