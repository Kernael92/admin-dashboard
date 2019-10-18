import functools
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)


content = Blueprint("content", __name__, template_folder='templates', static_folder='static')