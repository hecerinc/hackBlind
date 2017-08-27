from flask import Flask
from flask import make_response
from flask import request
from flask import jsonify
from bson import ObjectId
import pymongo 
import json


app = Flask(__name__)

client = pymongo.MongoClient("localhost", 27017)
db = client.blindapi

@app.route("/")
def hello():
    resp = make_response("Hello world", 200)
    resp.headers['Content-Type'] = 'text/plain'
    print("hello world")
    return resp

@app.route("/api/v1.0/maps/store/<uuid>/", methods=["POST"])
def store_map(uuid=None):
	if uuid == None or request.json == None:
		return make_response("No id passed. Check documentation for API.", 404)
		
	# store in mongodb
	# db.maps.insertOne(data)
	db.maps.find_one_and_update({"uid": uuid}, {'$set': {"uid": uuid, "mapdata": request.json}}, upsert=True)
	return jsonify({'success': True, 'message': "success"})

class JSONEncoder(json.JSONEncoder):
	def default(self,o):
		if isinstance(o, ObjectId):
			return str(o)
		return json.JSONEncoder.default(self,o)

@app.route("/api/v1.0/maps/get/<uuid>/", methods=["GET"])
def get_map(uuid=None):
	if uuid == None:
		return make_response("No id passed. Check documentation for API.", 404)
	collection = db.maps.find_one({"uid": uuid})
	words = JSONEncoder().encode(collection)
	print(words)
	return words


@app.route("/api/v1.0/edge/<uuid>/<nodea>/<nodeb>")
def get_edge(uuid = None, nodea = None, nodeb= None):
	if uuid == None or nodea == None or nodeb == None:
		return make_response("No id passed. Check documentation for API.", 404)
	edge = db.edges.find_one({origin: nodea, destination: nodeb})
	if edge != None:
		return jsonify({message: "No document found", error: "error"})
	return jsonify(edge)
	# do something cool
