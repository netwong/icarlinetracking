function moveForward () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 60)
}
function turnLeft () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 60)
}
function lineTrackingMode () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        xCenter = huskylens.readeArrow(1, Content2.xOrigin)
        if (xCenter < 100) {
            turnLeft()
        }
        if (xCenter > 220) {
            turnRight()
        }
        if (xCenter >= 100 && xCenter <= 220) {
            moveForward()
        }
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
}
function turnRight () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 60)
}
let xCenter = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    lineTrackingMode()
})
