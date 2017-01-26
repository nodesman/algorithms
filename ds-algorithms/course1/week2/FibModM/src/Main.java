import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        long a = s.nextLong();
        int m = s.nextInt();

        BigInteger lastDigit = fibonacciModulus(a, m);

        System.out.println(lastDigit);
    }

    private static BigInteger fibonacciModulus(long n, int m) {

        BigInteger s = BigInteger.ZERO;
        BigInteger l = BigInteger.ONE;
        BigInteger c;
        long cm, lm, sm;

        ArrayList<Long> mods = new ArrayList<>();
        mods.add(0L);
        mods.add(1L);

        for (long iter = 2; iter < n; iter++) {
            c = s.add(l);

            cm = c.mod(BigInteger.valueOf(m)).longValue();
            lm = l.mod(BigInteger.valueOf(m)).longValue();
            

        }
    }
}
