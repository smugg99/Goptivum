// routes/routes.go
package routes

import (
	"os"

	"smuggr.xyz/optivum-bsf/common/models"
	"smuggr.xyz/optivum-bsf/api/v1/handlers"

	//"github.com/didip/tollbooth"
	//"github.com/didip/tollbooth_gin"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func Initialize(defaultRouter *gin.Engine, scheduleChannels *models.ScheduleChannels) {
	//defaultLimiter := tollbooth.NewLimiter(0.5, nil)
	defaultRouter.Use(static.Serve("/", static.LocalFile(os.Getenv("DIST_PATH"), false)))

	rootGroup := defaultRouter.Group("/api/v1")
	//rootGroup.Use(tollbooth_gin.LimitHandler(defaultLimiter))

	handlers.Initialize()

	SetupGenericRoutes(defaultRouter, rootGroup, scheduleChannels)
	SetupScheduleRoutes(defaultRouter, rootGroup)
	SetupWeatherRoutes(defaultRouter, rootGroup)

	defaultRouter.NoRoute(func(c *gin.Context) {
		c.File(os.Getenv("DIST_PATH") + "/index.html")
	})
}
