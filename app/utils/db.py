from flask_pymongo import PyMongo
from pymongo import MongoClient 

# create a database connection file in which 
# CRUD operations can be performed

class Base(object):
    def __init__(self):
        momgo_conn = MongoClient(app.config['MONGO_URI'])
        self.mongo_db = mongo_conn[app.config['DB_NAME']]

    def get(self, collection_name, query):
        try:
            cursor = self.mongo[collection_name].find(query)
            count = cursor.count()
            return count, list(cursor)
        except Exception as e:
            print('Exception while getting from MongoDB', e)

    def insert(self, collection_name, documents):
        try:
            collection = self.mongo_db[collection_name]
            print(documents)
            if isinstance(documents, list):
                _id = collection.insert_many(documents).inserted_ids
            else:
                _id = collection.insert_one(documents).inserted_ids
            return _id
        except Exception as e:
            print('Exception while inserting to MongoDB', e)

    def update(self, collection_name, query, value):
        try:
            if isinstance(value, list):
                self.mongo_db[collection_name].update_many(query, value)
            else:
                self.mongo_db[collection_name].update_one(query, value)
        except Exception as e:
            print("Exception while updating MongoDB", e)

    def delete(self, collection_name, query):
        try:
            self.mongo_db[collection_name].update_many(query, {"$set": {"meta.is_deleted": True}})
        except Exception as e:
            print('Exception while deleting records in MongoDB')
