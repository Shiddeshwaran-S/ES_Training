#include<stdio.h>
#include<stdlib.h>

typedef struct Node listNode;

struct Node
{
    int data;
    struct Node *next;
};

listNode *createNode(int ele){
    listNode *newNode = (listNode*)malloc(sizeof(listNode));
    newNode->data = ele;
    newNode->next = NULL;
    return newNode;
}

listNode *insert_end(listNode *head,int ele){
    if (head == NULL){
        return createNode(ele);
    }

    listNode *temp = head;
    while(temp->next != NULL){
        temp = temp->next;
    }
    temp->next = createNode(ele);
    return head;
}

listNode *insert_begin(listNode *head, int ele)
{
    if (head == NULL)
    {
        return createNode(ele);
    }

    listNode *temp = head;
    
    head = createNode(ele);
    head->next = temp;

    return head;
}

listNode *insert_pos(listNode *head, int ele,int pos)
{
    if (head == NULL)
    {
        return createNode(ele);
    }

    listNode *temp = head;
    listNode *nex = NULL;
    for (int i = 0; i < pos; i++)
    {
        temp = temp->next;
        nex = temp->next;
    }
    temp->next = createNode(ele);
    temp->next->next = nex;

    return head;
}

listNode *delete_pos(listNode *head, int pos)
{

    if(head == NULL) return NULL;

    listNode *temp = head;
    listNode *prev = NULL;

    for(int i = 0; i < pos; i++){
        prev = temp;
        temp = temp->next;
    }

    if(temp == NULL)
        return NULL;
    else prev->next = temp->next;

    return head;
}

listNode *delete_begin(listNode *head) {

    if (head == NULL)
        return NULL;

    head = head->next;

    return head;
}

listNode *delete_end(listNode *head)
{

    if (head == NULL)
        return NULL;

    listNode *temp = head;
    while (temp->next->next != NULL)
    {
        temp = temp->next;
    }

    temp->next = NULL;

    return head;
}

listNode *search(listNode *head, int ele)
{
    if (head == NULL)
        return NULL;

    listNode *temp = head;
    while (temp != NULL)
    {
        if (temp->data == ele)
            return temp;
        temp = temp->next;
    }

    return NULL;
}


int main(){
    listNode *head = NULL;
    int choice,ele,pos;
    while(1){
        printf("1.Insert at end\n");
        printf("2.Insert at begin\n");
        printf("3.Insert at position\n");
        printf("4.Delete at end\n");
        printf("5.Delete at begin\n");
        printf("6.Delete at position\n");
        printf("7.Search an element\n");
        printf("8.Exit\n");
        printf("Enter your choice: ");
        scanf("%d",&choice);
        
        switch (choice)
        {
        case 1:
            printf("Enter the element to be inserted: ");
            scanf("%d",&ele);
            
            head = insert_end(head,ele);
            break;
        
        case 2:
            printf("Enter the element to be inserted: ");
            scanf("%d",&ele);
            
            head = insert_begin(head,ele);
            break;
        
        case 3:
            printf("Enter the element to be inserted: ");
            scanf("%d",&ele);
            
            printf("Enter the position: ");
            scanf("%d",&pos);
            
            head = insert_pos(head,ele,pos-1);
            break;
        
        case 4:
            head = delete_end(head);
            printf("Element deleted.\n");
            break;
        
        case 5:
            head = delete_begin(head);
            printf("Element deleted.\n");
            break;
        
        case 6:
            printf("Enter the position: ");
            scanf("%d",&pos);
        
            head = delete_pos(head,pos-1);
            printf("Element deleted.\n");
            break;
        
        case 7:
            printf("Enter the element to be searched: ");
            scanf("%d",&ele);
            
            if(search(head,ele) == NULL)
                printf("Element not found.\n");
            else
                printf("Element found.\n");

            break;
        
        case 8:
            exit(0);
            break;
        
        default:
            printf("Invalid choice.\n");
            break;
        }
    }
    return 0;
}