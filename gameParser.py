# Right now this will take a pre-downloaded game file from chess.com and 
# iterate through to get the important information

def parseGame(fileName):
    f = open(fileName, "r")
    if f.closed:
        print("Error")
    else:
        print("Success")
    llist = f.readlines()
    for l in llist:
        print(l)
    

def main():
    name = "2389022681-PJRoastbeef_vs_jdpeven-2017_10_24.pgn"
    parseGame(name)

main()