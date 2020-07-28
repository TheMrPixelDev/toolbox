from PyPDF2 import PdfFileReader, PdfFileWriter
import sys
import os
import csv


output_file_name = sys.argv[1]

input_files = []

self_path = os.path.dirname(__file__)

cache_path = os.path.join(self_path, '../cache.csv')

with open(cache_path, "r") as f:

    reader = csv.reader(f)
    pdf_writer = PdfFileWriter()

    for file in reader:
        pdf_reader = PdfFileReader(file[0], strict=False)
        for page in range(pdf_reader.getNumPages()):
            pdf_writer.addPage(pdf_reader.getPage(page))

    with open(output_file_name, 'wb') as out:
        pdf_writer.write(out)