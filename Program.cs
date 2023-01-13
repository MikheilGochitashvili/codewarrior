using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //List<int> MyFunction (int a, int b)
            //{
            //    List<int> array = new List<int>();

            //    for(int i = a; i <= b; i++)
            //    {
            //        array.Add(i);
            //    }

            //    return array;
            //}

            //foreach(var item in MyFunction(1, 4))
            //{
            //    Console.WriteLine(item);
            //}


            foreach(var item in Between(5, 9))
            {
                Console.WriteLine(item);
            }
        }

        public static int[] Between (int a, int b)
        {
            int[] array = new int[b - a + 1];

            for(int i = 0; i < array.Length; i++)
            {
                array[i] = a++;
            }


            return array;
        }

       
    }
}

