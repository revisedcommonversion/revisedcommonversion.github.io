import os # For running system commands.
import re # For regular expressions.
import sys

total_chapters = int(sys.argv[1]) # The first argument given: the number of chapters.
book_name = sys.argv[2] # The second argument given: the name of the book in lower case.

chapter = 1 # Begin with chapter 1.
extract = False # Flag used to indicate text extraction.
ch_notes_pattern = re.compile(r"\[\[  ch_notes  \]\]") # Regular expression to match where the chapter notes go in the chapter file.
notes_heading = re.compile(r"TOC-Notes") # Regular expression to match the heading at the beginning of the Notes section on the webpage.
notes_end = re.compile(r"<\/div>\n") # Regular expression to match the end of the Notes section on the webpage.

# Loop through the chapters.
while chapter <= total_chapters:
  # Use curl to get the source code of the webpage from which to extract notes.
  print("Chapter: " + chapter)
  os.system("curl http://www.revisedcommonversion.com/" + book_name + "/ch" + str(chapter) + " > temp_page.txt")
  
  webpage = open("temp_page.txt", "r") # Open the above downloaded webpage file for reading.
  notes_file = open("notes.txt", "w") # Open a text file for writing extracted notes.
  
  for line in webpage:
    if not extract:
      if notes_heading.search(line):
        if not notes_end.search(line):
          extract = True # Begin extracting text.
          continue # Skip the current line and go on to the next.
    elif notes_end.search(line):
      notes_file.write("  " + line) # Write the final line of notes.
      extract = False # Stop extracting text.
    else:
      notes_file.write("  " + line)
    
  webpage.close() # Close the webpage file.
  notes_file.close() # Close the notes file.
  
  notes_file = open("notes.txt", "r") # Open the notes file for reading.
  notes_text = re.sub("<\/div>", "", notes_file.read()) # Strip the closing div tags and store the contents of the file into a variable.
  
  chapter_file_name = "ch" + str(chapter) + ".html"
  chapter_file = open(chapter_file_name, "r") # Read from the current chapter file.
  new_temp_file = open(chapter_file_name + ".rcv", "w") # Create a new temp file for writing.
  
  # Copy the original file to the new temp file, writing the contents of notes_text to the line containing ch_notes_pattern.
  for line in chapter_file:
    if ch_notes_pattern.search(line):
      new_temp_file.write(notes_text)
    else:
      new_temp_file.write(line)
  
  # Close all opened files.
  notes_file.close()
  chapter_file.close()
  new_temp_file.close()
  
  # Copy the new temp file to the original.
  os.system("cp " + chapter_file_name + ".rcv " + chapter_file_name)
  
  # Delete the notes.txt file to ensure a blank new copy is created for each chapter in the while loop.
  os.system("rm notes.txt")
  chapter += 1

# When all is said and done, delete all temporary files and other files that are no longer needed.
os.system("rm *.html.rcv")
os.system("rm temp_page.txt")
os.system("rm insert_notes.py")
os.system("rm chapter_text.py")

