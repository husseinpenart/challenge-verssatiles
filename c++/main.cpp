#include <iostream>
using namespace std;

int main()
{
    int number;
    number = -100;
    if (number >= 0)
    {
        cout << "printed number is positive\n";
    }
    else
    {
        cout << "printed number is negative\n";
    }
    // greater number among the numbers
    int a = 10, b = 20, c = 30;
    if (a >= b && a >= c)
    {
        cout << "number: " << a << endl;
    }
    else if (b >= a && b >= c)
    {
        cout << "number: " << b << endl;
    }
    else
    {
        cout << "number: " << c << endl;
    }
    return 0;
}
