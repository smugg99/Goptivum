// routes/generic.go
package routes

import (
	"fmt"

	"smuggr.xyz/optivum-bsf/common/models"
	"smuggr.xyz/optivum-bsf/api/v1/handlers"
	"smuggr.xyz/optivum-bsf/core/sse"

	"github.com/gin-gonic/gin"
)

func SetupGenericRoutes(router *gin.Engine, rootGroup *gin.RouterGroup, scheduleChannels *models.ScheduleChannels) {
	healthGroup := rootGroup.Group("/health")
	{
		healthGroup.GET("/ping", handlers.PingHandler)
	}

	var DivisionsHub = sse.NewHub()
	var TeachersHub = sse.NewHub()
	var RoomsHub = sse.NewHub()

	go DivisionsHub.Run()	
	go TeachersHub.Run()
	go RoomsHub.Run()

	sseGroup := rootGroup.Group("/events")
	{
		sseGroup.GET("/divisions", func(c *gin.Context) {
			DivisionsHub.Handler()(c.Writer, c.Request)
		})
		
		sseGroup.GET("/teachers", func(c *gin.Context) {
			TeachersHub.Handler()(c.Writer, c.Request)
		})

		sseGroup.GET("/rooms", func(c *gin.Context) {
			RoomsHub.Handler()(c.Writer, c.Request)
		})
	}

	go func() {
		for message := range scheduleChannels.Divisons {
			fmt.Println("broadcasting refresh for divisions hub:", message)
			DivisionsHub.Broadcast(message)
		}
	}()

	go func() {
		for message := range scheduleChannels.Teachers {
			fmt.Println("broadcasting refresh for teachers hub:", message)
			TeachersHub.Broadcast(message)
		}
	}()

	go func() {
		for message := range scheduleChannels.Rooms {
			fmt.Println("broadcasting refresh for rooms hub:", message)
			RoomsHub.Broadcast(message)
		}
	}()
}