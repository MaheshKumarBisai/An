import os

def run_command(user_input):
   
    os.system(f"echo {user_input}")

def unsafe_eval(user_code):

    eval(user_code)

def main():
    user_input = input("Enter something: ")
    run_command(user_input)

    code = input("Enter code to eval: ")
    unsafe_eval(code)

if __name__ == "__main__":
    main()
