# Right now this will take a pre-downloaded game file from chess.com and 
# iterate through to get the important information
import chess
import chess.pgn

def parseGame(fileName):
    pgn = open(fileName)
    if pgn.closed:
        print("Error")
    else:
        print("Success")
    game = chess.pgn.read_game(pgn)
    #print(game.headers["White"])
    

def main():
    name = "./games/2389022681-PJRoastbeef_vs_jdpeven-2017_10_24.pgn"
    parseGame(name)

main()