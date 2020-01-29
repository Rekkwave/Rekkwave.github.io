import java.util.Scanner;

public class A2dot2{
  public static void main(String[] args) {
	// Scanner is for user input
    Scanner input = new Scanner(System.in);
    
    System.out.print("Enter the radius of a cylinder: ");
      double radius = input.nextDouble();
   
    System.out.print("Enter the length of a cylinder: ");
      double length = input.nextDouble();

       double area = radius * radius * Math.PI;
       double volume = area * length;
      

    System.out.println("The area is " + area + " The volume is " + volume );
}
}