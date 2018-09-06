import os # For running system commands.
import re # For regular expressions.
import sys

source_file_name = sys.argv[1]
new_menu_file_name = "../new_menu.txt"
temp_file_name = source_file_name + ".rcv"
insert = False
insert_point_pattern = re.compile(r'  <nav>\n')
end_replaced_text_pattern = re.compile(r'  <\/nav>\n')

source_file = open(source_file_name, "r")
temp_file = open(temp_file_name, "w")

new_menu_file = open(new_menu_file_name, "r")
menu_text = new_menu_file.read()

for line in source_file:
  if not insert:
    if insert_point_pattern.search(line):
      insert = True
      temp_file.write(menu_text)
      #continue
    else:
      temp_file.write(line)
  elif insert:
    if end_replaced_text_pattern.search(line):
      insert = False
  #else:
    #temp_file.write(menu_text)
    #insert = False

# Close all files.
source_file.close()
new_menu_file.close()
temp_file.close()

os.system("cp " + temp_file_name + " " + source_file_name) # Copy the temp file back to the source file.
os.system("rm " + temp_file_name) # Remove the temporary file.

