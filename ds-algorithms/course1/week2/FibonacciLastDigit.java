import java.util.Scanner;

class FibbonacciLastDigit {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();

        int lastDigit = fibonacciDigit(a);

        System.out.println(lastDigit);
    }

    private static int fibonacciDigit(int n) {

        BigInteger[] list = new BigInteger[n];
        list[0] = 0;
        list[1] = 1;

        for (int iter = 2; iter <= n; iter++) {
            list[iter] = list[iter - 1] + list[iter - 2];
        }

        BigInteger number = list[iter-1];
        return number;
    }
}