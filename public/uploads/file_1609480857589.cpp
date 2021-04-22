#include<stdio.h>

int main(){

    int n,a[n];
    printf("enter number of element:");
    scanf("%d",&n);
    printf("enter the array elements:\n");
    for(int i=0;i<n;i++){
        scanf("%d",&a[i]);
    }

    for(int i=n;i>0;i--){
        printf("reverse array :%d",a[i]);
    }


}
