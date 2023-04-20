#!/usr/bin/python3
'''
0-pascal_triangle
'''
def pascal_triangle(n):
    '''
	function returns a list of lists of integers rep the pascal's triangle of n
    '''
    # Create an empty list to store the Pascal's triangle
    pascal = []

    # If n is less than or equal to 0, return the empty list
    if n <= 0:
        return pascal

    # Create the first row of the Pascal's triangle with a single element equal to 1
    triangle_row = [1]

    # Add the first row to the Pascal's triangle
    pascal.append(triangle_row)

    # Loop through each row of the Pascal's triangle
    for row in range(1, n):

        # Create an empty list to store the current row of the Pascal's triangle
        triangle_row = []

        # Add the first element of the current row, which is always 1
        triangle_row.append(1)

        # Loop through each element in the current row, excluding the first and last elements
        for element in range(1, row):

            # Compute the value of the current element as the sum of the two elements above it in the previous row
            previous_row = pascal[row - 1]
            current_element = previous_row[element - 1] + previous_row[element]
            
            # Add the current element to the current row of the Pascal's triangle
            triangle_row.append(current_element)

        # Add the last element of the current row, which is always 1
        triangle_row.append(1)

        # Add the current row to the Pascal's triangle
        pascal.append(triangle_row)

    # Return the Pascal's triangle
    return pascal
