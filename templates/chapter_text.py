import os # For running system commands.
import re # For regular expressions.

##### CHANGE THESE VARIABLES FOR EACH BOOK #####
total_chapters = 27 # The number of chapters in the book.
source_file = "03-Leviticus.xhtml" # The name of the file from which the text will be extracted.

chapter = 1 # Begin with chapter 1.
ch_end = re.compile(r"\* \* \*") # Regular expression to match the end of a chapter.
ch_ref = re.compile(r">References<") # Regular expression to match any references sections.
ch_text_pattern = re.compile(r"\[\[  ch_text  \]\]") # Regular expression to match where the chapter text goes in the chapter file.
extract = False # Flag used to indicate text extraction.

# Loop through the chapters.
while chapter <= total_chapters:
  book_file = open(source_file, "r") # Read from the source file.
  temp_file = open("temp.txt", "w") # Open a temporary text file to temporarily store chapter text.
  ch_begin = re.compile(r'id="ch' + str(chapter) + '"') # Regular expression to match the beginning of a chapter.
  counter = 1
  
  # Scan the source file.
  for line in book_file:
    if not extract:
      if ch_begin.search(line): # If the current line is the beginning of the current chapter...
        extract = True # Begin extracting text.
        continue # Skip the current line and go on to the next.
    elif ch_ref.search(line) or ch_end.search(line): # If the current line is a References section or the end of the current chapter...
      extract = False # Stop extracting text.
    else:
      if counter > 2: # This is a round-and-about way to skip two lines to avoid getting the chapter outline.
        temp_file.write(line)
      counter += 1
  
  temp_file.close() # Close the temp file.
  temp_file = open("temp.txt", "r") # Open the temporary text file for reading.
  ch_text = temp_file.read() # Store the contents of the file into a variable.
  
  chapter_file_name = "ch" + str(chapter) + ".html"
  chapter_file = open(chapter_file_name, "r") # Read from the current chapter file.
  new_temp_file = open(chapter_file_name + ".rcv", "w") # Create a new temp file for writing.
  
  # Copy the original file to the new temp file, writing the contents of ch_text to the line containing ch_text_pattern.
  for line in chapter_file:
    if ch_text_pattern.search(line):
      new_temp_file.write(ch_text)
    else:
      new_temp_file.write(line)
  
  # Close all remaining open files.
  new_temp_file.close()
  chapter_file.close()
  book_file.close()
  temp_file.close()
  
  # Copy the new temp file to the original.
  os.system("cp " + chapter_file_name + ".rcv " + chapter_file_name)
  
  # Increase chapter.
  chapter += 1

# When all is said and done, delete all temporary files.
os.system("rm *.html.rcv")
os.system("rm temp.txt")
os.system("rm chapter_text.py")
os.system("rm " + source_file)

