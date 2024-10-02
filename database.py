from mongoengine import connect

def init_db():
    connect('msme_credit_db')