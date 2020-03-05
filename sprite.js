class Sprite {
    // constructor
    constructor(x, y, name, game) {
        this.name = name
        this.game = game
        this.hp = 1
        this.die = false
        this.id = null
        this.image = null
        this.width = null
        this.height = null
        this.centerX = null
        this.centerY = null
        this.init(x, y)
    }

    init(x, y) {
        this.x = x
        this.y = y

        this.image = this.game.getImage(this.name)

        var self = this
        this.image.onload = function () {
            self.width = self.image.width
            self.height = self.image.height

            self.centerX = self.x + self.width / 2
            self.centerY = self.y + self.height / 2
        }
    }

    draw() {
        if (this.die) {
            return
        }
        this.game.drawSprite(this)
    }

    update() {
        // 中心坐标算的不对, 可能是更新的太慢了
        // this.centerX = this.x + this.width / 2
        // this.centerY = this.y + this.height / 2
    }
}