import os # For running system commands.
import chapter_data as data # From chapter_data.py in the same directory.

chapter_limit = len(data.extras)
testament_file = ""

if data.testament == "New Testament":
  testament_file = "..\/..\/pages\/nt.html"
elif data.testament == "Old Testament":
  testament_file = "../../pages/ot.html"

# Patterns in the template file to replace.
book_file_pattern = "\[\[  file_name  \]\]"
book_title_pattern = "\[\[  full_title  \]\]"
book_short_title_pattern = "\[\[  short_title  \]\]"
chapter_number_pattern = "\[\[  ch_num  \]\]"
chapter_prev_pattern = "\[\[  ch_prev  \]\]"
chapter_next_pattern = "\[\[  ch_next  \]\]"
chapter_outline_pattern = "\[\[  ch_outline  \]\]"
commentary_link_pattern = "\[\[  comment_link  \]\]"
testament_pattern = "\[\[  ot_nt  \]\]"
testament_file_pattern = "\[\[  ot_nt_file  \]\]"

# Generate a chapter file for each chapter of the book.
chapter = 1 # Start at chapter 1.

# Loop through each chapter.
while chapter <= chapter_limit:
  chapter_outline = data.extras[str(chapter)][0] # Get the chapter outline string.
  commentary_link = data.extras[str(chapter)][1] # Get the commentary link string.
  chapter_prev = "" # Make sure this begins each loop as an empty string.
  chapter_next = "" # Make sure this begins each loop as an empty string.
  
  chapter_file = "ch" + str(chapter) + ".html" # Build the chapter file name string.
  
  # Previous chapter link.
  if chapter > 1:
    chapter_prev = "ch" + str(chapter-1) + ".html"
  
  # Next chapter link.
  if chapter < chapter_limit:
    chapter_next = "ch" + str(chapter+1) + ".html"
    
  template_file = open("chapter-page.html", "r") # Read from the template file.
  new_file = open(chapter_file, "w") # Generate a new file and write to it.
  
  # Make a copy of template_file in new_file.
  for line in template_file:
    new_file.write(line)
  
  template_file.close() # Close the template file.
  new_file.close() # Close the generated file.
  
  # Run various sed commands to replace the needed fields in the new file.
  os.system("sed -i 's/" + book_file_pattern + "/" + data.book_file + "/g' " + chapter_file)
  # Quotes are swapped in the below command to properly replace the ' character.
  os.system('sed -i "s/' + book_title_pattern + '/' + data.book_title + '/g" ' + chapter_file)
  os.system("sed -i 's/" + book_short_title_pattern + "/" + data.book_short_title + "/g' " + chapter_file)
  os.system("sed -i 's/" + chapter_number_pattern + "/" + str(chapter) + "/g' " + chapter_file)
  os.system("sed -i 's/" + chapter_prev_pattern + "/" + chapter_prev + "/g' " + chapter_file)
  os.system("sed -i 's/" + chapter_next_pattern + "/" + chapter_next + "/g' " + chapter_file)
  # Quotes are swapped in the below command to properly replace the ' character.
  os.system('sed -i "s/' + chapter_outline_pattern + '/' + chapter_outline + '/g" ' + chapter_file)
  os.system("sed -i 's/" + commentary_link_pattern + "/" + commentary_link + "/g' " + chapter_file)
  os.system("sed -i 's/" + testament_pattern + "/" + data.testament + "/g' " + chapter_file)
  os.system("sed -i 's/" + testament_file_pattern + "/" + testament_file + "/g' " + chapter_file)
  
  chapter += 1
# End of while loop.

