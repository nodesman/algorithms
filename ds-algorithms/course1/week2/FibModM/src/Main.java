import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        BigInteger a = s.nextBigInteger();
        int m = s.nextInt();

        BigInteger lastDigit = fibonacciDigit(a, m);

        System.out.println(lastDigit);
    }

    private static BigInteger fibonacciDigit(BigInteger n, int m) {

        BigInteger iter = new BigInteger(String.valueOf(2));

        ArrayList<BigInteger> mods = new ArrayList<>();

        BigInteger s = BigInteger.ZERO;
        BigInteger l = BigInteger.ONE;
        BigInteger c = null;

        BigInteger sm, lm = BigInteger.ONE, cm = BigInteger.ONE;

        for (; 0 < n.compareTo(iter) && !((lm.equals(BigInteger.ZERO) && cm.equals(BigInteger.ONE))); ) {
            System.out.println(iter);

            c = s.add(l);

            lm = l.mod(BigInteger.valueOf(m));
            cm = c.mod(BigInteger.valueOf(m));
            sm = s.mod(BigInteger.valueOf(m));

            if (lm.equals(BigInteger.ZERO) && cm.equals(BigInteger.ONE)) {
                break;
            }

            s = new BigInteger(String.valueOf(l));
            l = new BigInteger(String.valueOf(c));

            mods.add(sm);
            iter = iter.add(BigInteger.ONE);
        }

        if (n.equals(iter.subtract(BigInteger.valueOf(1)))) {
            return c.mod(BigInteger.valueOf(m));
        }

        BigInteger size = BigInteger.valueOf(mods.size());

        BigInteger index = n.mod(size);

        return mods.get(index.intValue());
    }
}
