def moveForward():
    mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_RUN, 60)
def turnLeft():
    mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_LEFT, 60)
def lineTrackingMode():
    huskylens.request()
    if True:
        pass
    else:
        pass
def turnRight():
    mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_RIGHT, 60)

def on_forever():
    pass
basic.forever(on_forever)
