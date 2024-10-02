from flask import Blueprint, request, jsonify
from models import MSME

api_routes = Blueprint('api', __name__)

@api_routes.route('/msme', methods=['POST'])
def create_msme():
    data = request.json
    msme = MSME(**data)
    msme.save()
    return jsonify(msme.to_json()), 201

@api_routes.route('/msmes', methods=['GET'])
def get_msmes():
    msmes = MSME.objects()
    return jsonify(msmes), 200