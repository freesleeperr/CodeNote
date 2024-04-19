namespace CodeNote;
//动态规划
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
        for (int i = 0; i < 10; i++)
        {
            Console.Write((Dp(i)));
        }
    }
    static int Dp(int n)
    {
        int fq;
        if (n == 0 || n == 1)
        {
            fq = 1;
            return 1;
        }
        else
        {
            return Dp(n - 1) + Dp(n - 2);
        }

    }

}
public class Solution
{

    public int UniquePaths(int m, int n)
    {
        int[,] memo = new int[m, n];
        if (m == 1,n == 1){
            return memo = memo[m, n] = 1;
        }else
        {
            if (memo[m, n] != null)
            {
                return memo[m, n];
            }
            else
            {
                return memo[m, n] = UniquePaths(m - 1, n) + UniquePaths(n - 1, m);
            }
        }
    }
}
