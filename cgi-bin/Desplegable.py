#!/usr/bin/python3
import mysql.connector
import cgi



cnx = mysql.connector.connect (user='carlos2', password = 'Qwerty1234*', database='Collarbone', host='127.0.0.1')
sql= ('select * from camisetas')

cur.execute(sql)
find= cur.fetchall()
nombres=""

for row in find:
	nombres+='<option value="{}">{}</option>'.format(row[0])

print('<h1>{}</h1>'.format(nombres))



