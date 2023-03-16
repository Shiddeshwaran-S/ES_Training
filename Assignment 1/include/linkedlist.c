#include <stdio.h>
#include <stdlib.h>

typedef struct Node listNode;

// List node structure
struct Node
{
    int data;
    struct Node *next;
};

// create a new node and return its address
listNode *createNode(int ele)
{
    listNode *newNode = (listNode *)malloc(sizeof(listNode));
    newNode->data = ele;
    newNode->next = NULL;
    return newNode;
}

// insert the element at end of the list and return the address of the head node
listNode *insert_end(listNode *head, int ele)
{
    if (head == NULL)
    {
        return createNode(ele);
    }

    listNode *temp = head;
    while (temp->next != NULL)
    {
        temp = temp->next;
    }
    temp->next = createNode(ele);
    return head;
}

// insert the element at begin of the list and return the address of the head node
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

// insert the element at the given position of the list and return the address of the head node
listNode *insert_pos(listNode *head, int ele, int pos)
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
    }

    nex = temp->next;

    temp->next = createNode(ele);
    temp->next->next = nex;

    return head;
}

// delete the element at the given position of the list and return the address of the head node
listNode *delete_pos(listNode *head, int pos)
{

    if (head == NULL)
        return NULL;

    listNode *temp = head;
    listNode *prev = NULL;

    for (int i = 0; i < pos; i++)
    {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL)
        return NULL;
    else
        prev->next = temp->next;

    return head;
}

// delete the element at begin of the list and return the address of the head node
listNode *delete_begin(listNode *head)
{

    if (head == NULL)
        return NULL;

    head = head->next;

    return head;
}

// delete the element at end of the list and return the address of the head node
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

// search the element in the list and return the address of the node if found else return NULL
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

// display the list elements
void display(listNode *head)
{
    if (head == NULL)
    {
        printf("List is empty.\n");
        return;
    }

    listNode *temp = head;
    while (temp != NULL)
    {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}