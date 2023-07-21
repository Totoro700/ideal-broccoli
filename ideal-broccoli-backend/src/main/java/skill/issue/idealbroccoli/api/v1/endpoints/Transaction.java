package skill.issue.idealbroccoli.api.v1.endpoints;

public class Transaction {
    public static String doTransaction(long cardNumber, double moneys) {
        long cardNumberCopy = cardNumber;
        //verify card number using luhn algorithm
        if (cardNumber < 1000000000000000L || cardNumber > 9999999999999999L) {
            return "Invalid card number";
        }
        int[] digits = new int[16];
        for (int i = 0; i < 16; i++) {
            digits[i] = (int) (cardNumber % 10);
            cardNumber /= 10;
        }
        for (int i = 1; i < 16; i += 2) {
            digits[i] *= 2;
            if (digits[i] > 9) {
                digits[i] -= 9;
            }
        }
        int sum = 0;
        for (int i = 0; i < 16; i++) {
            sum += digits[i];
        }
        if (sum % 10 != 0) {
            return "Invalid card number";
        }
        //do transaction
        return "Transaction successful, processed $" + moneys + " from card number " + cardNumberCopy;
    }
}
