import os # For running system commands.

# Change these variables with each month.
month = "december" # The month in lower case.
month_days = 31 # The number of days in the month.

# Modified variables; no need to change these.
# Slice: 0:3 -- start at index 0 and get the next 3 characters of the string.
short_month = month[0:3] # The month abbreviation via slicing the month string.
month_title = str.title(month) # The month in title format.
devotion_file = month + ".html" # The name of the index HTML file of the month.

# Patterns in the template file to replace.
day_pattern = "\[\[  devotion_day  \]\]"
month_pattern = "\[\[  devotion_month  \]\]"
file_pattern = "\[\[  devotion_month_file  \]\]"

day = 1 # Start on day 1.

while day <= month_days:
  # Add a leading 0 to the day if a single-digit day.
  if day < 10:
    day_string = "0" + str(day)
  else:
    day_string = str(day)
  
  devotion_day_file = short_month + day_string + ".html" # The name of the HTML file for the current day.
  
  template_file = open("devotion-page.html", "r") # Read from the template file.
  new_file = open(devotion_day_file, "w") # Generate a new file and write to it.
  
  # Make a copy of template_file in new_file.
  for line in template_file:
    new_file.write(line)
  
  template_file.close() # Close the template file.
  new_file.close() # Close the generated file.
  
  # Run various sed commands to replace the needed fields in the new file.
  os.system("sed -i 's/" + day_pattern + "/" + month_title + " " + str(day) + "/g' " + devotion_day_file)
  os.system("sed -i 's/" + month_pattern + "/" + month_title + "/g' " + devotion_day_file)
  os.system("sed -i 's/" + file_pattern + "/" + devotion_file + "/g' " + devotion_day_file)
  
  day += 1

