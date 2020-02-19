-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.ProductName
     , c.CategoryName 
FROM Product p
INNER JOIN Category c ON p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT * FROM "Order"
WHERE 
CAST(strftime('%s', OrderDate) AS integer) < CAST(strftime('%s', '2012-08-09') AS integer) ;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName
    , o.Quantity 
FROM OrderDetail o
INNER JOIN Product p ON o.ProductId = p.Id
WHERE o.OrderId = 10251
ORDER BY p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.Id AS OrderID
    , c.CompanyName AS CustomerCompany
    , e.LastName AS EmployeeLastName
FROM "Order" o
INNER JOIN Employee e ON o.EmployeeId = e.Id
INNER JOIN Customer c ON o.CustomerId = c.Id;