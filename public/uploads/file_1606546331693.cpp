#include<bits/stdc++.h>
using namespace std;

void least_square(double x[10000],double y[10000],int n){

        double y1[10000];
        cout<<"the table of values is given below:"<<endl;
       cout<<"x\t\ty\t\tx^2\t\txy"<<endl;
       for(int i=0;i<n;i++){
            y1[i]=log(y[i]);
        cout<<setprecision(5)<<x[i]<<"\t\t"<<y1[i]<<"\t\t"<<pow(x[i],2)<<"\t\t"<<x[i]*y1[i];
         cout<<endl;
       }

        double a1,a0,x_sum=0,x2_sum=0,y_sum=0,xy_sum=0,Y[10000];

        for(int i=0;i<n;i++)
        {
        x_sum=x_sum+x[i];
        y_sum=y_sum+log(y[i]);
        x2_sum=x2_sum+pow(x[i],2);
        xy_sum=xy_sum+x[i]*log(y[i]);
        }

  a1=(n*xy_sum-x_sum*y_sum)/(n*x2_sum-x_sum*x_sum);
    a0=(y_sum-(x_sum*a1))/n;

    double a=exp(a0);
    double b=a1;

    cout<<"\nthe values of this equation:\n\n"<<"a: "<<a<<" b: "<<setprecision(2)<<b<<endl;
    cout<<endl<<"the final equation , Y = "<<a<<"e^("<<b<<"x)"<<endl;

}

int main()
{
    int n;
    double x[10000],y[10000];

    ifstream f;
    f.open("curve4.txt");

    while(!f.eof()){

        f>>n;

        for(int i=0;i<n;i++){
            f>>x[i]>>y[i];
        }

       /* for(int i=0;i<n;i++){
            cout<<x[i]<<" "<<y[i];
        }*/


        least_square(x,y,n);

        }

}

