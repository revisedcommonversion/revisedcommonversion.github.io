import re # For regular expressions.
import os # For running system commands.
import time # For getting the current date.

######################################################################### Setup.

title_pattern = "\[\[  title  \]\]"
description_pattern = "\[\[  description  \]\]"
summary_title_pattern = "\[\[  summary_title  \]\]"
pub_date_pattern = "\[\[  pub_date  \]\]"
url_pattern = "\[\[  url  \]\]"

article_file_name = input("Type in the file name without the extension: ")
article_file = article_file_name + ".html"
article_url = "https:\/\/www.revisedcommonversion.com\/pages\/articles\/" + article_file

article_title = input("Article title: ")
article_summary_title = input("Article summary title: ")
article_description = input("Article description: ")

publish_date = time.strftime("%a, %d %b %Y") # Get the current date. Format: Thu, 06 Sep 2018.

os.system("touch " + article_file) # Create the new article file.

####################################################### Update the article file.

template_file = open("article-page.html", "r") # Read from the article template file.
new_article = open(article_file, "w") # Write to the new article file.

for line in template_file:
  new_article.write(line) # Copy the template file contents to the new article file.

template_file.close()
new_article.close()

# Fill in the information fields.
os.system('sed -i "s/' + title_pattern + '/' + article_title + '/g" ' + article_file)
os.system('sed -i "s/' + summary_title_pattern + '/' + article_summary_title + '/g" ' + article_file)
os.system('sed -i "s/' + description_pattern + '/' + article_description + '/g" ' + article_file)
os.system('sed -i "s/' + pub_date_pattern + '/' + publish_date + '/g" ' + article_file)

article_text_pattern = re.compile(r'\[\[  article_text  \]\]')

# Insert the article text.
new_article = open(article_file, "r") # Read from the new article file.
temp_article = open(article_file + ".rcv", "w") # Write to the temporary article file.
article_text_file = open("article.txt", "r") # Read from the article text file.
article_text = article_text_file.read() # Store the contents of the article text file in memory.

# Copy the new article file to the new temporary article file, writing the contents of article_text to the line containing article_text_pattern.
for line in new_article:
  if article_text_pattern.search(line):
    temp_article.write(article_text)
  else:
    temp_article.write(line)

# Close the files.
new_article.close()
temp_article.close()
article_text_file.close()

os.system("cp " + article_file + ".rcv " + article_file) # Copy the temporary article file back to the new article file.
os.system("rm " + article_file + ".rcv") # Remove the temporary article file.

########################################################### Update the RSS file.

# Update the chunk file.
os.system("cp rss-chunk.txt rss-chunk.txt.bak") # Make a copy of the rss-chunk.txt file.
os.system('sed -i "s/' + title_pattern + '/' + article_title + '/g" rss-chunk.txt')
os.system('sed -i "s/' + url_pattern + '/' + article_url + '/g" rss-chunk.txt')
os.system('sed -i "s/' + description_pattern + '/' + article_description + '/g" rss-chunk.txt')
os.system('sed -i "s/' + pub_date_pattern + '/' + publish_date + '/g" rss-chunk.txt')

insert_chunk_pattern = re.compile(r'  <!-- newitem -->')
insert_chunk = False

rss_file = open("rcv-rss.xml", "r") # Read from the RSS file.
temp_rss = open("rcv-rss.xml.rcv", "w") # Write to the temporary RSS file.
rss_chunk_file = open("rss-chunk.txt", "r")
chunk_text = rss_chunk_file.read() # Store the contents of the rss chunk file in memory.

for line in rss_file:
  if insert_chunk_pattern.search(line):
    temp_rss.write(chunk_text)
  else:
    temp_rss.write(line)

# Close the files.
rss_file.close()
temp_rss.close()
rss_chunk_file.close()

os.system("cp rss-chunk.txt.bak rss-chunk.txt") # Copy the temporary chunk file back to the rss-chunk.txt file.
os.system("rm rss-chunk.txt.bak") # Remove the temporary chunk file.
os.system("cp rcv-rss.xml.rcv rcv-rss.xml") # Copy the temporary RSS file back to the rcv-rss.xml file.
os.system("rm rcv-rss.xml.rcv") # Remove the temporary RSS file.

###################################################################### Clean up.

os.system("mv " + article_file + " ../pages/articles/" + article_file) # Move the new article to the articles directory.
os.system("cp rcv-rss.xml ../pages/articles/rcv-rss.xml") # Copy the RSS file to the articles directory, replacing the existing RSS file there.

