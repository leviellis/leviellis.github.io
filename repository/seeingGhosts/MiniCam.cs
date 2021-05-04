using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MiniCam : MonoBehaviour
{
    public Transform player;
    Vector3 eulerRotation;

    public int height;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        this.transform.position = new Vector3(player.position.x, height, player.position.z);

        eulerRotation = new Vector3(this.transform.eulerAngles.x, player.eulerAngles.y, this.transform.eulerAngles.z);
        transform.rotation = Quaternion.Euler(eulerRotation);
    }
}
