import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        long a = s.nextLong();
        int m = s.nextInt();

        Long lastDigit = fibonacciModulus(a, m);

        System.out.println(lastDigit);
    }

    private static Long fibonacciModulus(long n, int m) {

        BigInteger s = BigInteger.ZERO;
        BigInteger l = BigInteger.ONE;
        BigInteger c = null;
        long cm, lm, sm;

        ArrayList<Long> mods = new ArrayList<>();
        mods.add(0L);
        mods.add(1L);
        long iter = 2;

        for (;iter <= n; iter++) {
            c = s.add(l);

            cm = c.mod(BigInteger.valueOf(m)).longValue();
            lm = l.mod(BigInteger.valueOf(m)).longValue();

            if (lm == 0 && cm == 1) {
                break;
            }

            s = new BigInteger(String.valueOf(l));
            l  = new BigInteger(String.valueOf(c));

            mods.add(cm);
        }

        mods.remove(mods.size() - 1);

        if (iter-1 == n) {
            return c.mod(BigInteger.valueOf(m)).longValue();
        }

        int index = (int) (n % mods.size());

        return mods.get(index);
    }
}
