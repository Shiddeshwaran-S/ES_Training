#include <stdio.h>
#include <stdlib.h>
#include "include/linkedlist.c"

// driver code
int main()
{
    listNode *head = NULL;
    int choice, ele, pos;
    while (1)
    {
        printf("1.Insert at end\n");
        printf("2.Insert at begin\n");
        printf("3.Insert at position\n");
        printf("4.Delete at end\n");
        printf("5.Delete at begin\n");
        printf("6.Delete at position\n");
        printf("7.Search an element\n");
        printf("8.Display\n");
        printf("9.Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        printf("\n");
        switch (choice)
        {
        case 1:
            printf("Enter the element to be inserted: ");
            scanf("%d", &ele);

            head = insert_end(head, ele);
            break;

        case 2:
            printf("Enter the element to be inserted: ");
            scanf("%d", &ele);

            head = insert_begin(head, ele);
            break;

        case 3:
            printf("Enter the element to be inserted: ");
            scanf("%d", &ele);
            printf("\n");

            printf("Enter the position: ");
            scanf("%d", &pos);

            head = insert_pos(head, ele, pos - 2);
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
            scanf("%d", &pos);
            printf("\n");

            head = delete_pos(head, pos - 1);
            printf("Element deleted.\n");
            break;

        case 7:
            printf("Enter the element to be searched: ");
            scanf("%d", &ele);
            printf("\n");

            if (search(head, ele) == NULL)
                printf("Element not found.\n");
            else
                printf("Element found.\n");

            break;

        case 8:
            display(head);
            break;

        case 9:
            exit(0);
            break;

        default:
            printf("Invalid choice.\n");
            break;
        }
        printf("\n");
    }
    return 0;
}