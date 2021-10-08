import csv
import json
import pymongo
import certifi
from dotenv import load_dotenv
import os
from dotenv import load_dotenv
load_dotenv()

def make_json(csvPath, jsonPath, data):

    output = {}

    with open(csvPath, encoding='utf-8-sig') as csvf:
        csvReader = csv.DictReader(csvf)
         
        for rows in csvReader:
            if data:    
                key = rows['Id']
                # Delete any unwanted elements from
                # final JSON object
                del rows['Id']
                del rows['ID']
                del rows['School']
                output[key] = rows
            else:
                output = rows

    with open(jsonPath, 'w', encoding='utf-8-sig') as jsonf:
        jsonf.write(json.dumps(output, indent=4))

def post_data(data):

    MONGO_STRING="mongodb+srv://bw-tech-innovation:{password}@cluster0.1fl5q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority".format(password=os.environ.get("PASSWORD"))

    client = pymongo.MongoClient(MONGO_STRING, tlsCAFile=certifi.where())

    db = client['lodp']
    collection = db['lodp-datasets']
    collection.insert_one(data)


if __name__ == "__main__":    
    
    # Name of the file with full csv data
    csvPath1 = './princeton_review/princeton_review_data.csv'

    # Where you want the json of full data to go
    full_data_path = './princeton_review/princeton_review.json'

    make_json(csvPath1, full_data_path, True)

    # Name of the csv file with the metadata
    csvPath2 = './princeton_review/princeton_review_meta.csv'

    # Where you want the final json object to be stored
    metadata_path = './princeton_review/princeton_review_final.json'

    make_json(csvPath2, metadata_path, False)

    fd = open(full_data_path, "r", encoding='utf-8-sig')
    full_data = json.load(fd)

    with open(metadata_path, "r+", encoding='utf-8-sig') as file:
        metadata = json.load(file)
        metadata["Data"] = full_data
        file.seek(0)
        json.dump(metadata, file, indent=4)

    json_object = open(metadata_path, "r", encoding='utf-8-sig')
    final_data = json.load(json_object)

    post_data(final_data)
