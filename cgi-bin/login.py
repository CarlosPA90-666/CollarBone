
#!/usr/bin/python3
import hashlib
import base64
import mysql.connector
import cgi

def encript (txt):
    newpassword = hashlib.sha1(txt.encode()).digest()
    encriptado = base64.b64encode(newpassword).decode('UTF-8')
    return encriptado

data = cgi.FieldStorage()

correo = data.getvalue('correo')
password = data.getvalue('password')

cnx = mysql.connector.connect (user='aclr', password = '1010029624', database='Collarbone', host='127.0.0.1')
cur = cnx.cursor()

cur.execute('select password_ from usuarios where correo = {}'.format(correo))
tem = False
nombre = ":p"
for i in cur:
    if password in i:
        sql = ("select nombre from usuarios where correo = {}".format(correo))
        cur.execute(sql)
        tem = True
        find = cur.fetchall()
        for row in find:
            nombre = row[0]


print('Content-Type: text/html')
print('')

print('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">')
print('<link rel="stylesheet" href="/CollarBone/css/registro_usr.css">')
print('<div class="card"> <h5 class="card-header"><i>Collarbone</i></h5> <div class="card-body">')

if (tem):
    print('<h7> Bienvenido de nuevo <b>{}</b> a <i>Collarbone.</i></h7>'.format(nombre))
    print('<a href="/CollarBone/index.html" class="badge badge-dark"> Ver camisetas!</a>')
else:
    print('<h7>El correo o la contraseña ingresados no existen.</h7>')
    print('<a href="/CollarBone/registro_usr.html" class="badge badge-dark"> ¿Registrarse?</a>')
cnx.close()
print('</div></div>')






