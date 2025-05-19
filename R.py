import os
import subprocess

def insecure_command(user_input):
    os.system("ls " + user_input)

def dangerous_eval(code):
    eval(code)

def weak_crypto():
    import hashlib
    password = "secret"
    hash = hashlib.md5(password.encode()).hexdigest()
    print("Weak hash:", hash)

def main():
    name = input("Enter name: ")
    insecure_command(name)

    code = input("Enter Python code: ")
    dangerous_eval(code)

    weak_crypto()

if __name__ == "__main__":
    main()
