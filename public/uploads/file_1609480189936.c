#include<stdio.h>

int main(){
    int a[3][3],b[3][3];

    printf("enter the elements of a matrix:\n");
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
                printf("a%d%d:",i,j);
            scanf("%d",&a[i][j]);
        }

    }
    printf("\n");
    printf("enter the elements of b matrix:\n");
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            printf("b%d%d:",i,j);
            scanf("%d",&b[i][j]);
        }

    }

    int c[3][3];
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            c[i][j]=(a[i][j]*b[i][j]);
        }

    }

    printf("after multipling a and b ,the result is :\n");
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            printf("%d\t",c[i][j]);

        }
           printf("\n");
    }


         return 0;


}
